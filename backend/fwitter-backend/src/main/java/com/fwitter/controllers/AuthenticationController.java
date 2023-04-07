package com.fwitter.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fwitter.exceptions.EmailAlreadyTakenException;
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
}
