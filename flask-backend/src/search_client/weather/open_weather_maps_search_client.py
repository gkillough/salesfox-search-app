import datetime

import requests

from .weather_env_config import OPEN_WEATHER_API_KEY
from ..location import location_search_api_client

OPEN_WEATHER_MAP_URL = "http://history.openweathermap.org/data/2.5"
CITY_HISTORY_SPEC = "/history/city"


def five_day_history_by(zip_code):
    found_lat_and_long = location_search_api_client.find_first_lat_and_long(zip_code)
    if found_lat_and_long is not None:
        latitude = found_lat_and_long.get(location_search_api_client.KEY_LATITUDE)
        longitude = found_lat_and_long.get(location_search_api_client.KEY_LONGITUDE)
        request_url = f"{OPEN_WEATHER_MAP_URL}{CITY_HISTORY_SPEC}"
        params = {
            "lat": latitude,
            "lon": longitude,
            "appid": OPEN_WEATHER_API_KEY,
            "type": "day",
            "start": compute_epoch_minus_five_days(),
            "cnt": 5
        }
        response = requests.get(url=request_url, params=params)
        return response.json()
    return None


def compute_epoch_minus_five_days():
    current_time = datetime.datetime.utcnow()
    return current_time - datetime.timedelta(days=4, hours=23, minutes=59)
