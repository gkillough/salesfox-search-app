import datetime

import requests

from .weather_env_config import OPEN_WEATHER_API_KEY

OPEN_WEATHER_MAP_URL = "https://api.openweathermap.org/data/2.5"
HISTORICAL_API_SPEC = "/onecall/timemachine"


def request_weather_summary(latitude, longitude, timestamp=None):
    params = {
        "lat": latitude,
        "lon": longitude,
        "appid": OPEN_WEATHER_API_KEY,
        "units": "imperial",
    }

    if timestamp is not None:
        params["dt"] = timestamp
    else:
        params["dt"] = compute_weather_timestamp_minus_days(0)

    request_url = f"{OPEN_WEATHER_MAP_URL}{HISTORICAL_API_SPEC}"
    response = requests.get(url=request_url, params=params)
    response_json = response.json()
    return response_json.get("current")


def create_icon_url(icon_id):
    return f"https://openweathermap.org/img/wn/{icon_id}@2x.png"


def compute_weather_timestamp_minus_days(minus_days):
    current_time = datetime.datetime.utcnow()
    days_ago = current_time - datetime.timedelta(days=minus_days)
    return int(days_ago.timestamp())
