package com.example.Boardgame_Library_Backend.Models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Inventory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(unique = true)
    private String title;

    private boolean isAvailable;
    private int tableNumber;

    public Inventory(String title, boolean isAvailable, int tableNumber) {
        this.title = title;
        this.isAvailable = isAvailable;
        this.tableNumber = tableNumber;
    }
}
