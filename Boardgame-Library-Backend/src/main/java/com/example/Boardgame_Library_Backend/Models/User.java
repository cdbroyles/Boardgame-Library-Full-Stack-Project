package com.example.Boardgame_Library_Backend.Models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

@Entity
@Getter
@Setter
@NoArgsConstructor
//Forces Lombok to use normal getter/setter names.  Was having problem with isAdmin (camelCase)
@Accessors(fluent = false)
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String username;

    //Will ignore password in JSON requests
    @JsonIgnore
    private String password;

    //JsonProperty helps deal with Jackson renaming to "admin"
    @JsonProperty("isAdmin")
    private boolean isAdmin;

    public User(String username, String password, boolean isAdmin) {
        this.username = username;
        this.password = password;
        this.isAdmin = isAdmin;
    }
}