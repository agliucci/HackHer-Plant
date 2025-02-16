from flask import Flask, render_template
import serial
import time

app = Flask(__name__)

# pico_serial = "COM3"
# serial_connection = serial.Serial(pico_serial, baudrate=115200, timeout=1)

# def command(cmd):
#     serial_connection.write(f"{cmd}\n".encode())
#     time.sleep(0.1)

@app.route('/', methods=['GET'])
def home():
    return render_template('index.html')

@app.route('/turn_red', methods=['GET', 'POST'])
def turn_red():
    #command("RED")
    return render_template('red.html')

@app.route('/turn_green', methods=['GET', 'POST'])
def turn_green():
    #command("GREEN")
    return render_template('green.html')

@app.route('/turn_blue', methods=['GET', 'POST'])
def turn_blue():
    #command("BLUE")
    return render_template('blue.html')

if __name__ == '__main__':
    app.run(debug=True)