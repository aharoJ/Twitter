package com.fwitter.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;       // provides basic crud
import org.springframework.stereotype.Repository;

import com.fwitter.models.ApplicationUser;

                                                                                // ApplicationUser because that is what we are storing
                                                                                // Integer because that is the ID  
@Repository                                                                     //  This creates the BEAM 
public interface UserRepository extends JpaRepository <ApplicationUser, Integer>
{
    Optional<ApplicationUser> findByUsername(String username);                  // this is gonna be helpful in the future for spring-security 

}