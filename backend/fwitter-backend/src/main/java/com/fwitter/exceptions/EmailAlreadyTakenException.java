package com.fwitter.exceptions;

public class EmailAlreadyTakenException extends  RuntimeException 
{
    private static final long serialVersionUID= 1L;

    public EmailAlreadyTakenException(){
        super("Ops, looks like this email is already taken x_x");
    }
    
}
