from datetime import datetime

from .open_weather_maps_search_client import request_weather_summary, compute_weather_timestamp_minus_days, \
    create_icon_url, KEY_WEATHER, KEY_WEATHER_DATE, KEY_WEATHER_MAIN, KEY_WEATHER_ICON
from ..location import location_search_api_client


def five_day(zip_code):
    weather = []

    found_lat_and_long = location_search_api_client.find_first_lat_and_long(zip_code)
    if found_lat_and_long is not None:
        latitude = found_lat_and_long.get(location_search_api_client.KEY_LATITUDE)
        longitude = found_lat_and_long.get(location_search_api_client.KEY_LONGITUDE)

        for i in range(5, 0, -1):
            search_start_time = compute_weather_timestamp_minus_days(i)
            weather_summary = request_weather_summary(latitude, longitude, search_start_time)
            salesfox_weather_summary = create_salesfox_weather_summary(weather_summary)
            weather.append(salesfox_weather_summary)

    return {
        "count": len(weather),
        "weather": weather
    }


def create_salesfox_weather_summary(open_weather_maps_summary):
    weather_summaries = open_weather_maps_summary.get(KEY_WEATHER)
    return {
        "date_string": create_salesfox_date(open_weather_maps_summary.get(KEY_WEATHER_DATE)),
        "utc_timestamp": open_weather_maps_summary.get(KEY_WEATHER_DATE),
        "conditions": [
            {
                "summary": summary.get(KEY_WEATHER_MAIN),
                "iconUrl": create_icon_url(summary.get(KEY_WEATHER_ICON))
            } for summary in weather_summaries
        ]
    }


def create_salesfox_date(timestamp):
    return datetime.utcfromtimestamp(timestamp).strftime("%m/%d/%Y")
