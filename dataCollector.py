from pprint import pprint 
import json
import requests
from datetime import datetime
import time

API_KEY="46d1e55b176aa16c5179b746f4870b2f"

cities = ["Manipal" ,"Hyderabad" ,"Delhi" ,"Mumbai" ,"Bhubaneshwar" ,"Kolkata" ,"Thrissur" ,"Jaipur", "Kutch", "Srinagar", "Guwahati", "Chennai"]

def main() :
	date_and_time_of_execution = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
	f = open("{}.json".format(date_and_time_of_execution), "w+")
	db = {}
	for city in cities :
		time.sleep(0.5)
		r = requests.get("https://api.openweathermap.org/data/2.5/weather?q={0}&APPID={1}".format(city, API_KEY))
		db[city] = json.loads(r.content)
	f.write(json.dumps(db, indent=4, sort_keys=True))
	f.close()

if __name__ == '__main__':
	while True :
		sleep(14400)
		main()
	