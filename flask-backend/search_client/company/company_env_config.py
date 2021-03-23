import os

# Environment Variable Management

MONGODB_URL = os.getenv("SALESFOX_MONGODB_URL", default="mongodb-pdl-datasets.salesfox.ai:27017")
MONGODB_DATABASE_NAME = os.getenv("SALESFOX_MONGODB_DATABASE_NAME", default="pdl-datasets")
MONGODB_COMPANY_USER = os.getenv("SALESFOX_MONGODB_COMPANY_USER", default="companySearcher")
MONGODB_COMPANY_PASSWORD = os.getenv("SALESFOX_MONGODB_COMPANY_PASSWORD", default=None)
