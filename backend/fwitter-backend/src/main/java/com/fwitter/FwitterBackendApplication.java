package com.fwitter;

import java.util.HashSet;

import org.apache.tomcat.jni.User;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.fwitter.models.ApplicationUser;
import com.fwitter.models.Role;
import com.fwitter.repositories.RoleRepository;
import com.fwitter.repositories.UserRepository;
import com.fwitter.services.UserService;

@SpringBootApplication
public class FwitterBackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(FwitterBackendApplication.class, args);
	}

	// TESTING 
	@Bean
	CommandLineRunner run(RoleRepository roleRepo, UserService userService)
	{
		return args -> 
		{
			roleRepo.save(new Role(1, "USER"));

			ApplicationUser u = new ApplicationUser();
			u.setFirstName("Angel");
			u.setLastName("Haro");

			userService.registerUser(u);

			/*ApplicationUser u = new ApplicationUser();
			u.setFirstName("Yaretzy");
			u.setLastName("Haro");

			HashSet<Role> roles= new HashSet<>();
			roles.add(roleRepo.findByAuthority("USER").get());
			u.setAuthorities(roles);
			userRepo.save(u); */
		};
	}

}
