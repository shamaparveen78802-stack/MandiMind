from fastapi import FastAPI

app = FastAPI(title="MandiMind Backend")


@app.get("/")
def read_root():
    return {"message": "Welcome to MandiMind Backend"}


@app.get("/health")
def health_check():
    return {"status": "ok"}