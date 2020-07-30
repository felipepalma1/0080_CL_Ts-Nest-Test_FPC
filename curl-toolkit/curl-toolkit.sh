#!/bin/bash

# Solicitud HTTP POST en cURL 
curl localhost:3000/tasks  -# -X POST -H "Content-Type: application/x-www-form-urlencoded" -d "title=NewCoomer&description=Neochile Arrives from future"
curl localhost:3000/tasks  -# -X POST -H "Content-Type: application/json" -d '{"title":"New Coomer", "description":"Neochile Arrives from future"}'
