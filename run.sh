#!/bin/bash
source venv/bin/activate
export FLASK_APP=api/index.py
flask run --debug