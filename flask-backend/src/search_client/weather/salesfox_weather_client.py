from .open_weather_maps_search_client import request_weather_summary, compute_weather_timestamp_minus_days, \
    create_icon_url
from ..location import location_search_api_client


def five_day(zip_code):
    found_lat_and_long = location_search_api_client.find_first_lat_and_long(zip_code)
    if found_lat_and_long is not None:
        latitude = found_lat_and_long.get(location_search_api_client.KEY_LATITUDE)
        longitude = found_lat_and_long.get(location_search_api_client.KEY_LONGITUDE)
        search_start_time = compute_weather_timestamp_minus_days(5)
        weather_summary = request_weather_summary(latitude, longitude, search_start_time)
        print(weather_summary)
        return create_salesfox_weather_summary(weather_summary)
    return {}


def create_salesfox_weather_summary(open_weather_maps_summary):
    weather_summaries = open_weather_maps_summary.get("weather")
    return {
        "date": "Example",
        "summaries": [{
            "summary": summary.get("main"),
            "description": summary.get("description"),
            "iconUrl": create_icon_url(summary.get("icon"))
        } for summary in weather_summaries]
    }
