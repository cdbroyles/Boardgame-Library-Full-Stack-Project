package com.example.Boardgame_Library_Backend.Models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.experimental.Accessors;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Accessors(fluent = false)
public class CheckedOutInventory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String title;

    private int tableNumber;

    public CheckedOutInventory(String title, int tableNumber) {
        this.title = title;
        this.tableNumber = tableNumber;
    }
}
