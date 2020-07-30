#!/bin/bash

while true; do
  curl localhost:3000/tasks  -# -X POST -H "Content-Type: application/json" -d '{"title":"New Coomer", "description":"Neochile Arrives from future"}'
done
