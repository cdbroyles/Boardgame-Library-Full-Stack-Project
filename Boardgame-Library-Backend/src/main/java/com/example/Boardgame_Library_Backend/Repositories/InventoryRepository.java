package com.example.Boardgame_Library_Backend.Repositories;

import com.example.Boardgame_Library_Backend.Models.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InventoryRepository extends JpaRepository<Inventory, Long> {
}
