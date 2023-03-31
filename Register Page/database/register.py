#import nodige libraries
from flask import Flask, request
import pyodbc

# Connect to the database
conn = pyodbc.connect(r'Driver={Microsoft Access Driver (*.mdb, *.accdb)};DBQ=C:\Users\migae\Documents\#programming 2\website\Register Page\database\database\website-register.accdb;')

# Create a flask app (the thing that hosts the server side)

app= Flask(__name__)

# Define a route to handle form submissions
@app.route('/register', methods=['POST'])
def register():

    # Get The user details from register form
    username = request.form['username']
    email = request.form['email']
    password = request.form['password']

    # Insert the user details into the database

    cursor = conn.cursor()
    cursor.execute('INSERT INTO register (username, email, password) VALUES(?, ?, ?)', (username, email, password))
    conn.commit()

    #Display success message to the user
    return 'User Registered successfully!'

#run the app

if __name__ == '__main__':
    app.run()

