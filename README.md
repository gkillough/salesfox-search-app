# Dev Environment
- Python 3.9
- pip 21.0
- pipenv 2020.11

# How to run the app
```bash
export SALESFOX_BING_API_KEY=<your api key>
pipenv shell
python ./flask-backend/src/main.py
```
The server is available at http://localhost:5000

# How to use `pipenv`

## Start Environment
```bash
pipenv shell
```

## Quit Environment
```bash
exit
```

## Install Dependencies
Install dependencies from Pipfile
```bash
pipenv install
```
Install a new dependency and add it to Pipfile
```bash
pipenv install [library_name]
```
