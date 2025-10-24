package com.example.Boardgame_Library_Backend.Models;

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
@Accessors(fluent = false)
public class Inventory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true)
    private String title;

    //JsonProperty helps deal with Jackson renaming to "available"
    @JsonProperty("isAvailable")
    private boolean isAvailable;

    private int tableNumber;

    public Inventory(String title, boolean isAvailable, int tableNumber) {
        this.title = title;
        this.isAvailable = isAvailable;
        this.tableNumber = tableNumber;
    }
}
