package com.fwitter.services;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.fwitter.exceptions.EmailAlreadyTakenException;
import com.fwitter.exceptions.EmailFailedToSendException;
import com.fwitter.exceptions.IncorrectVerificationCodeException;
import com.fwitter.exceptions.UserDoesNotExistException;
import com.fwitter.models.ApplicationUser;
import com.fwitter.models.RegistrationObject;
import com.fwitter.models.Role;
import com.fwitter.repositories.RoleRepository;
import com.fwitter.repositories.UserRepository;
// import com.fwitter.services.MailService;;


@Service
public class UserService
{
    private final UserRepository userRepo;
    private final RoleRepository roleRepo;  
    private final MailService mailService;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserService(UserRepository userRepo, RoleRepository roleRepo, MailService mailService, PasswordEncoder passwordEncoder)
    {
        this.userRepo= userRepo;
        this.roleRepo= roleRepo;   
        this.mailService= mailService;
        this.passwordEncoder= passwordEncoder;
    }

    public ApplicationUser getUserByUsername(String username){
        return userRepo.findByUsername(username).orElseThrow(UserDoesNotExistException::new);
    }

    public ApplicationUser updateUser(ApplicationUser user){
        try{
            return userRepo.save(user);
        } catch(Exception e){
            throw new EmailAlreadyTakenException();
        }
    }




    public ApplicationUser registerUser(RegistrationObject ro)
    {
        ApplicationUser user= new ApplicationUser();
        user.setFirstName(ro.getFirstName());
        user.setLastName(ro.getLastName());
        user.setEmail(ro.getEmail());
        user.setDateOfBirth(ro.getDob());

        String name= user.getFirstName() + user.getLastName();

        boolean nameTaken= true;
        String tempName= "";
        while (nameTaken) {
            tempName= generateUsername(name);
            if(userRepo.findByUsername(tempName).isEmpty()){
                nameTaken= false;
            }
        }
        user.setUsername(tempName);



        Set<Role> roles= user.getAuthorities();
        roles.add(roleRepo.findByAuthority("USER").get());
        user.setAuthorities(roles);
        try{
            return userRepo.save(user);
        
        } catch (Exception e){
            throw new EmailAlreadyTakenException();
        }
    }

    public void generateEmailVerification(String username) {
        ApplicationUser user= userRepo.findByUsername(username).orElseThrow(UserDoesNotExistException::new);

        user.setVerification(generateVerificationNumber());

        try{
        mailService.sendEmail(user.getEmail(), "your verification code", "here is your verification code: " + user.getVerification());
        userRepo.save(user);
        } catch (Exception e){
            throw new EmailFailedToSendException();
        }
        userRepo.save(user);
    }


    public ApplicationUser verifyEmail(String username, Long code) {
        ApplicationUser user= userRepo.findByUsername(username).orElseThrow(UserDoesNotExistException::new);

        if(code.equals(user.getVerification())){
            user.setEnabled(true);
            user.setVerification(null);
            return userRepo.save(user);
        
        }else{
            throw new IncorrectVerificationCodeException();

        }
    }

    public ApplicationUser setPassword(String username, String password) {
        ApplicationUser user= userRepo.findByUsername(username).orElseThrow(UserDoesNotExistException::new);
        String encodedPassword= passwordEncoder.encode(password);
        user.setPassword(encodedPassword);          // pass the encrypted pass

        return userRepo.save(user);
    }


    private String generateUsername(String name){
        long generateNumber= (long) Math.floor(Math.random() * 1_000_000_000);

        return name+generateNumber;
    }

    private Long generateVerificationNumber(){
        return (long) Math.floor(Math.random() * 100_000_000);
    }
}