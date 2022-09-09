# Dependencies
(Mainly listed as shortcuts to documentation)

- [FastAPI](https://fastapi.tiangolo.com) as the base for the backend part.
- [Pydantic](https://pydantic-docs.helpmanual.io/) for conversion of untyped JSON to typed objects. And because FastAPI automatically supports it and gives you useful error messages if you mess up things.
- [Vue](https://vuejs.org/guide/introduction.html) for frontend, using native module support so no npm build step 🎉
- uvicorn to run the damn thing.

# Paths
- `data/train-parts` is scanned for datasets
- `filters` should contain filter json (but that's not implemented yet, right now it just has a hard-coded `FILTERS` dict in code)

# Placeholders script usage
```
# encode
python3 placeholders.py -s static/placeholder-stuff/test_encode_input -t static/placeholder-stuff/test_encode_output --encode --vocab static/placeholder-stuff/vocab.fren.spm --config static/placeholder-stuff/config.yaml
# decode
python3 placeholders.py -s static/placeholder-stuff/test_encode_output -t static/placeholder-stuff/test_decode_output --decode --vocab static/placeholder-stuff/vocab.fren.spm --config static/placeholder-stuff/config.yaml
# decode output and encode input should be the same
diff static/placeholder-stuff/test_encode_input static/placeholder-stuff/test_decode_output
```

# Installation for development
```sh
python3 -m venv .env
bash --init-file .env/bin/activate
pip install -r requirements.txt

mkdir -p data
mtdata get -l ara-eng -tr OPUS-elrc_2922-v1-ara-eng --compress -o data
mtdata get -l fra-eng -tr OPUS-elitr_eca-v1-eng-fra --compress -o data

./main.py serve --reload
```

If you want to use LASER, you will also need to download its assets:

```sh
python -m laserembeddings download-models
```

Then go to http://127.0.0.1:8000/ for the "interface" or http://127.0.0.1:8000/docs for the API.
