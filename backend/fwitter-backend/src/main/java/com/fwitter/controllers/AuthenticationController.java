package com.fwitter.controllers;

import java.util.LinkedHashMap;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fwitter.exceptions.EmailAlreadyTakenException;
import com.fwitter.exceptions.UserDoesNotExistException;
import com.fwitter.models.ApplicationUser;
import com.fwitter.models.RegistrationObject;
import com.fwitter.services.UserService;

@RestController
@RequestMapping("/auth")                // important in the future
public class AuthenticationController {
    private final UserService userService;

    @Autowired
    public AuthenticationController(UserService userService){
        this.userService= userService;
    }
    
    @ExceptionHandler({EmailAlreadyTakenException.class})
    public ResponseEntity<String> handleEmailTaken(){
        return new ResponseEntity<String>("The email provided is long gone v_V", HttpStatus.CONFLICT); // this blocks repititive emails
    }

    // go to http://localhost:8000/auth/register
    @PostMapping("/register")
    public ApplicationUser registerUser(@RequestBody RegistrationObject ro){
        
        return userService.registerUser(ro);
    }


    @ExceptionHandler({UserDoesNotExistException.class})
    public ResponseEntity<String> handleUserDoesntExist(){
        return new ResponseEntity<String>("The user you are looking for does not exist v_V", HttpStatus.NOT_FOUND);
    }

    // go to http://localhost:8000/auth/update/phone
    @PutMapping("/update/phone")
    public ApplicationUser updatePhoneNumber(@RequestBody LinkedHashMap<String,String> body){
        String username= body.get("username");
        String phone= body.get("phone");

        ApplicationUser user= userService.getUserByUsername(username);
        user.setPhone(phone);
        
        return userService.updateUser(user);
    }

    // go to http://localhost:8000/auth/email/code
    @PostMapping("/email/code")
    public ResponseEntity<String> createEmailVerification(@RequestBody LinkedHashMap<String,String> body){
        userService.generateEmailVerification(body.get("username"));

        return new ResponseEntity<String>("Verification Code generated, email sent",HttpStatus.OK );
    }
}





































