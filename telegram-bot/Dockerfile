FROM python:3.12-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt
COPY *.py .
ENV DB_PATH=/data/diary.db TZ_NAME=Europe/Kyiv PYTHONUNBUFFERED=1
VOLUME /data
CMD ["python", "bot.py"]
