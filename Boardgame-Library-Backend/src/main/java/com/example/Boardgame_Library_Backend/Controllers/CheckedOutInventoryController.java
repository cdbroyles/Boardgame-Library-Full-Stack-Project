package com.example.Boardgame_Library_Backend.Controllers;

import com.example.Boardgame_Library_Backend.Models.CheckedOutInventory;
import com.example.Boardgame_Library_Backend.Repositories.CheckedOutInventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

//CrossOrigin to allow requests from frontend server
@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/checkedoutinventory")
public class CheckedOutInventoryController {
    @Autowired
    private CheckedOutInventoryRepository checkedOutInventoryRepository;

    @GetMapping
    public List<CheckedOutInventory> getAllCheckedOutInventory() {
        return checkedOutInventoryRepository.findAll();
    }

    @GetMapping("/{tableNumber}")
    public List<CheckedOutInventory> getCheckedOutInventoryByTableNumber(@PathVariable int tableNumber) {
        return checkedOutInventoryRepository.findByTableNumber(tableNumber);
    }

    @PostMapping
    public CheckedOutInventory createCheckedOutInventory(@RequestBody CheckedOutInventory checkedOutInventory) {
        return checkedOutInventoryRepository.save(checkedOutInventory);
    }

    @DeleteMapping("/{title}")
    public void deleteCheckedOutInventoryByTitle(@PathVariable String title) {
        checkedOutInventoryRepository.deleteByTitle(title);
    }
}
