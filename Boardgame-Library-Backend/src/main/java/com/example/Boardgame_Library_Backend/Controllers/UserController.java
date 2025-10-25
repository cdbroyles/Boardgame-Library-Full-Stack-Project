package com.example.Boardgame_Library_Backend.Controllers;

import com.example.Boardgame_Library_Backend.Models.User;
import com.example.Boardgame_Library_Backend.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

//CrossOrigin to allow requests from frontend server
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

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

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id) {
        userRepository.deleteById(id);
    }

    @PostMapping("/login")
    public Map<String, Object> loginUser(@RequestBody Map<String, String> body) {
        String username = body.get("username");
        String password = body.get("password");
        User user = userRepository.findByUsernameAndPassword(username, password);
        if (user != null) {
            return Map.of(
                "success", true,
                "id", user.getId(),
                "username", user.getUsername(),
                "isAdmin", user.isAdmin()
            );
        } else {
            return Map.of(
                "success", false,
                "error", "Invalid username and/or password");
        }
    }
}