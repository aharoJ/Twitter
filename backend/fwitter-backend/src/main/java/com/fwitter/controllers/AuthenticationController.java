package com.fwitter.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fwitter.models.ApplicationUser;
import com.fwitter.services.UserService;

@RestController
@RequestMapping("/auth")                // important in the future
public class AuthenticationController {
    private final UserService userService;

    @Autowired
    public AuthenticationController(UserService userService){
        this.userService= userService;
    }
    
    // go to http://localhost:8000/auth/register
    @PostMapping("/register")
    public ApplicationUser registerUser(@RequestBody ApplicationUser user){
        
        return userService.registerUser(user);
    }
}
