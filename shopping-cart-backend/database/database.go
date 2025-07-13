package database

import (
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
	"log"
	"shopping-cart/models"
)

var DB *gorm.DB

func Connect() {
	var err error
	DB, err = gorm.Open(sqlite.Open("shopping_cart.db"), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database: ", err)
	}

	DB.AutoMigrate(&models.User{}, &models.Item{}, &models.Cart{}, &models.Order{})



}
