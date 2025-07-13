package controllers

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"shopping-cart/database"
	"shopping-cart/models"
	"github.com/google/uuid"
)

func CreateOrder(c *gin.Context) {
	username, _ := c.Get("username")

	var user models.User
	if err := database.DB.Where("username = ?", username).First(&user).Error; err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "User not found"})
		return
	}

	var cartItems []models.Cart
	database.DB.Where("user_id = ?", user.ID).Find(&cartItems)

	if len(cartItems) == 0 {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Cart is empty"})
		return
	}

	for _, cart := range cartItems {
		order := models.Order{
			ID:     uuid.New(),
			UserID: user.ID,
			ItemID: cart.ItemID,
		}
		database.DB.Create(&order)
	}

	database.DB.Where("user_id = ?", user.ID).Delete(&models.Cart{})

	c.JSON(http.StatusOK, gin.H{"message": "Order placed successfully"})
}

func GetOrders(c *gin.Context) {
	username, _ := c.Get("username")

	var user models.User
	if err := database.DB.Where("username = ?", username).First(&user).Error; err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "User not found"})
		return
	}

	var orders []models.Order
	database.DB.Preload("Item").Where("user_id = ?", user.ID).Find(&orders)

	var response []gin.H
	for _, order := range orders {
		response = append(response, gin.H{
			"item_name":  order.Item.Name,
			"item_price": order.Item.Price,
		})
	}

	c.JSON(http.StatusOK, response)
}
