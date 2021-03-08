from pymongo import MongoClient
from .company_env_config import MONGODB_URL, MONGODB_DATABASE_NAME, MONGODB_COMPANY_USER, MONGODB_COMPANY_PASSWORD

mongo_client = MongoClient(
        MONGODB_URL,
        username=MONGODB_COMPANY_USER,
        password=MONGODB_COMPANY_PASSWORD,
        authSource=MONGODB_DATABASE_NAME
    )
pdl_datasets = mongo_client[MONGODB_DATABASE_NAME]
companies_collection = pdl_datasets.get_collection("companies")


def find_by_name(company_name):
    found_companies_cursor = companies_collection.find({"name": company_name})
    found_companies_list = cursor_to_list(found_companies_cursor)
    return {
        "count": len(found_companies_list),
        "companies": found_companies_list
    }


def cursor_to_list(cursor):
    result = []
    for item in cursor:
        item_copy = item.copy()
        item_copy['_id'] = str(item_copy['_id'])
        result.append(item_copy)
    return result
