package controllers

import (
	"github.com/gin-gonic/gin"
	"net/http"
	"shopping-cart/database"
	"shopping-cart/models"
	"github.com/google/uuid"
)

func AddItem(c *gin.Context) {
	var item models.Item
	if err := c.ShouldBindJSON(&item); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Invalid JSON"})
		return
	}

	item.ID = uuid.New()
	database.DB.Create(&item)
	c.JSON(http.StatusOK, gin.H{"message": "Item created", "item": item})
}

func ListItems(c *gin.Context) {
	var items []models.Item
	database.DB.Find(&items)
	c.JSON(http.StatusOK, items)
}
