package com.example.Boardgame_Library_Backend.Controllers;

import com.example.Boardgame_Library_Backend.Models.Inventory;
import com.example.Boardgame_Library_Backend.Repositories.InventoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/inventory")
public class InventoryController {
    @Autowired
    private InventoryRepository inventoryRepository;

    @GetMapping
    public List<Inventory> getAllInventory() {
        return inventoryRepository.findAll();
    }

    @GetMapping("/{tableNumber}")
    public List<Inventory> getInventoryByTableNumber(@PathVariable int tableNumber) {
        return inventoryRepository.findByTableNumber(tableNumber);
    }

    @PostMapping
    public Inventory createInventory(@RequestBody Inventory inventory) {
        return inventoryRepository.save(inventory);
    }

    @DeleteMapping("/{title}")
    public void deleteInventoryByTitle(@PathVariable String title) {
        inventoryRepository.deleteByTitle(title);
    }
}
