package com.example.Boardgame_Library_Backend.Repositories;

import com.example.Boardgame_Library_Backend.Models.Inventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface InventoryRepository extends JpaRepository<Inventory, Long> {
    List<Inventory> findByTableNumber(int tableNumber);

    @Transactional
    void deleteByTitle(String title);
}
