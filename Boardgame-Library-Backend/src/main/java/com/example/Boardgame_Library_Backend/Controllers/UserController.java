package com.example.Boardgame_Library_Backend.Controllers;

import com.example.Boardgame_Library_Backend.Models.User;
import com.example.Boardgame_Library_Backend.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    //Get by ID is not a needed API call
//    @GetMapping("/{id}")
//    public User getUserById(@PathVariable Long id) {
//        return userRepository.findById(id).orElse(null);
//    }

    @PostMapping
    public User createUser(@RequestBody User user) {
        return userRepository.save(user);
    }

    @PutMapping("{id}")
    public User updateUserPassword(@PathVariable Long id, @RequestBody Map<String, String> body) {
        User user = userRepository.findById(id).orElse(null);
        if (user != null && body.containsKey("password")) {
            user.setPassword(body.get("password"));
            return userRepository.save(user);
        }
        return null;
    }
}