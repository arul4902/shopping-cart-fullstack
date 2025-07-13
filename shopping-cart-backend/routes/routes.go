package routes

import (
	"github.com/gin-gonic/gin"
	"shopping-cart/controllers"
	"shopping-cart/middleware"
)

func RegisterRoutes(r *gin.Engine) {

	r.POST("/users", controllers.RegisterUser)    
	r.POST("/users/login", controllers.LoginUser) 

	r.POST("/items", controllers.AddItem) 
	r.GET("/items", controllers.ListItems) 

	protected := r.Group("/")
	protected.Use(middleware.AuthMiddleware())

	protected.POST("/carts", controllers.AddToCart) 
	protected.GET("/carts", controllers.ViewCart)   

	protected.POST("/orders", controllers.CreateOrder)
	protected.GET("/orders", controllers.GetOrders)   
}
