package com.fwitter.models;

import java.sql.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "users")
public class ApplicationUser 
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) // let spring determine best course of action here
    @Column(name = "user_id")
    
    private Integer userId;
    
    @Column(name = "first_name")  // optional cuz spring auto-does this
    private String firstName;     // end point must be this not first_name

    @Column(name = "last_name") // optional cuz spring auto-does this
    private String lastName;  // end point must be this not last_name

    @Column(unique= true)
    private String email;

    private String phone;

    @Column(name= "dob")
    private Date dateOfBirth;

    @Column(unique= true)
    private String username;

    @JsonIgnore             // we dont want the password object to be sending back n forth to end-user... securirty issue
    private String password;
    

    @ManyToMany(fetch = FetchType.EAGER) // every time we get a user, we want to feth the users roles
    @JoinTable(
        name = "user_role_junction",
        joinColumns = {@JoinColumn(name="user_id")},
        inverseJoinColumns = {@JoinColumn(name = "role_id")}
    )

    private Set<Role> authorities;      // naming convention for spring-security 

    private Boolean enabled;            // sping-security stuff

    @Column(nullable = true)
    @JsonIgnore                         // we dont want the user to get the notification
    private Long verification;


    
    public ApplicationUser(){
        this.authorities= new HashSet<>();
        this.enabled= false;                    // when we first create the account we dont want the user to be able to use it 
    }



    public String getFirstName() {
        return firstName;
    }


    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }


    public String getLastName() {
        return lastName;
    }


    public void setLastName(String lastName) {
        this.lastName = lastName;
    }


    public String getEmail() {
        return email;
    }


    public void setEmail(String email) {
        this.email = email;
    }


    public String getPhone() {
        return phone;
    }


    public void setPhone(String phone) {
        this.phone = phone;
    }


    public Date getDateOfBirth() {
        return dateOfBirth;
    }


    public Integer getUserId() {
        return userId;
    }



    public void setUserId(Integer userId) {
        this.userId = userId;
    }



    public String getUsername() {
        return username;
    }



    public void setUsername(String username) {
        this.username = username;
    }



    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getPassword() {
        return password;
    }


    public void setPassword(String password) {
        this.password = password;
    }


    public Set<Role> getAuthorities() {
        return authorities;
    }


    public void setAuthorities(Set<Role> authorities) {
        this.authorities = authorities;
    }



    public Boolean getEnabled() {
        return enabled;
    }



    public void setEnabled(Boolean enabled) {
        this.enabled = enabled;
    }



    public Long getVerification() {
        return verification;
    }



    public void setVerification(Long verification) {
        this.verification = verification;
    }



    @Override
    public String toString() {
        return "ApplicationUser [userId=" + userId + ", firstName=" + firstName + ", lastName=" + lastName + ", email="
                + email + ", phone=" + phone + ", dateOfBirth=" + dateOfBirth + ", username=" + username + ", password="
                + password + ", authorities=" + authorities + ", enabled=" + enabled + ", verification=" + verification
                + "]";
    }


 
}
