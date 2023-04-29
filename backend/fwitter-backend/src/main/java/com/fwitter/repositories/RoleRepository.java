package com.fwitter.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.fwitter.models.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> // store a role, and ID 
{
    Optional<Role> findByAuthority(String autority);
}
