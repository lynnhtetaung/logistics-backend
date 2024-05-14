# Mongo DB install 
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -      
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
sudo systemctl start mongod                                                                                                 
sudo systemctl status mongod

# Dat saving and retreiving
curl -X POST http://localhost:5000/api/trackings -H "Content-Type: application/json" -d '{"name": "INDOCHINE INTERNATIONAL TRADING CO.,LTD.", "maccNo": 278509066, "blNo": "238927551", "selectivelyNo": 2, "noOfPackages": 3, "place": "Yangon", "itemStatus": 0, "status": 0, "created_by": "khin", "created_date": "2024-05-12", "updated_by": "khin", "updated_date": "2024-05-12"  }'         
curl http://localhost:5000/api/trackings   

  name: { type: String, required: true },
  maccNo: { type: Number, required: true },
  blNo: { type: Number, required: true },
  selectivelyNo: { type: Number, required: true},
  noOfPackages: { type: Number, required: true},
  place: { type: String, required: true},
  itemStatus: { type: Number, required: true}, 
  status: { type: Number, required: true},
  created_by: { type: String, required: true},
  updated_date: { type: Date, required: true},
  updated_by: { type: String, required: true},
  updated_date: { type: Date, required: true}