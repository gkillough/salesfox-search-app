import requests

OPEN_DATA_SOFT_URL = "https://public.opendatasoft.com/api/records/1.0/search/"

KEY_LATITUDE = "latitude"
KEY_LONGITUDE = "longitude"


def find_first_lat_and_long(zip_code):
    locations = find_locations(zip_code, 1)
    if locations is not None and len(locations) > 0:
        return extract_lat_and_long(locations[0])
    return None


# returns a list
def find_locations(search_term, max_results=10):
    params = {
        "q": search_term,
        "rows": max_results,
        "dataset": "us-zip-code-latitude-and-longitude",
        "lang": "en"
    }
    response = requests.get(url=OPEN_DATA_SOFT_URL, params=params)
    response_json = response.json()
    return response_json.get("records")


def extract_lat_and_long(location_entry):
    location_fields = location_entry.get("fields")
    return {
        KEY_LATITUDE: location_fields.get(KEY_LATITUDE),
        KEY_LONGITUDE: location_fields.get(KEY_LONGITUDE)
    }
