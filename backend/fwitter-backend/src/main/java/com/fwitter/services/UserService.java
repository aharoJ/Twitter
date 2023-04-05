package com.fwitter.services;

import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fwitter.models.ApplicationUser;
import com.fwitter.models.Role;
import com.fwitter.repositories.RoleRepository;
import com.fwitter.repositories.UserRepository;

@Service
public class UserService
{
    private final UserRepository userRepo;
    private final RoleRepository roleRepo;

    @Autowired
    public UserService(UserRepository userRepo, RoleRepository roleRepo)
    {
        this.userRepo= userRepo;
        this.roleRepo= roleRepo;   
    }

    public ApplicationUser registerUser(ApplicationUser user)
    {
        Set<Role> roles= user.getAuthorities();
        roles.add(roleRepo.findByAuthority("USER").get());
        user.setAuthorities(roles);

        return userRepo.save(user);
    }
}