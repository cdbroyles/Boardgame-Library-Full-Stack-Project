package com.example.Boardgame_Library_Backend.Repositories;

import com.example.Boardgame_Library_Backend.Models.CheckedOutInventory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface CheckedOutInventoryRepository extends JpaRepository<CheckedOutInventory, Long> {
    List<CheckedOutInventory> findByTableNumber(int tableNumber);

    @Transactional
    void deleteByTitle(String title);
}
