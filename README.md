# 🏠 Bangalore Home Price Prediction

A machine learning-powered web application that predicts real estate prices in Bangalore based on location, area, number of bedrooms (BHK), and bathrooms.

![Python](https://img.shields.io/badge/Python-3.12-blue.svg)
![Flask](https://img.shields.io/badge/Flask-3.1.2-green.svg)
![scikit-learn](https://img.shields.io/badge/scikit--learn-1.7.2-orange.svg)
![License](https://img.shields.io/badge/License-MIT-yellow.svg)

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Model Information](#model-information)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

- **🎯 Accurate Price Predictions**: ML model trained on Bangalore real estate data
- **📍 270+ Locations**: Covers major areas across Bangalore
- **💻 Modern UI**: Beautiful, responsive interface with smooth animations
- **⚡ Real-time Predictions**: Instant price estimates via REST API
- **📱 Mobile Friendly**: Fully responsive design works on all devices
- **🔒 Input Validation**: Comprehensive client and server-side validation

## 📁 Project Structure

```
BHP/
├── client/                      # Frontend files
│   ├── app.html                # Main HTML interface
│   ├── app.css                 # Styling and design
│   └── app.js                  # JavaScript logic
│
├── server/                      # Backend Flask application
│   ├── server.py               # Flask API server
│   ├── util.py                 # Utility functions
│   └── artifacts/              # Model artifacts
│       ├── banglore_house_price_model.pickle
│       └── columns.json
│
├── model/                       # Model training notebooks
│   └── [Jupyter notebooks]     # Data analysis & model training
│
└── README.md                    # Project documentation
```

## 🛠️ Technologies Used

### Backend
- **Python 3.12** - Programming language
- **Flask 3.1.2** - Web framework
- **scikit-learn 1.7.2** - Machine learning library
- **NumPy** - Numerical computing
- **Pandas** - Data manipulation

### Frontend
- **HTML5** - Structure
- **CSS3** - Styling with modern design
- **JavaScript (ES6)** - Client-side logic
- **jQuery 3.4.1** - AJAX requests

### Machine Learning
- **Linear Regression** - Prediction model
- **Feature Engineering** - Location encoding, area normalization

## 🚀 Installation

### Prerequisites

- Python 3.12 or higher
- pip (Python package manager)
- Anaconda/Miniconda (optional but recommended)

### Step 1: Clone the Repository

```bash
git clone https://github.com/yourusername/bangalore-home-price-prediction.git
cd bangalore-home-price-prediction/BHP
```

### Step 2: Set Up Python Environment

#### Using Conda (Recommended)

```bash
# Create a new conda environment
conda create -n flask_env python=3.12

# Activate the environment
conda activate flask_env
```

#### Using venv

```bash
# Create virtual environment
python -m venv .venv

# Activate on macOS/Linux
source .venv/bin/activate

# Activate on Windows
.venv\Scripts\activate
```

### Step 3: Install Dependencies

```bash
# Install required packages
pip install flask==3.1.2
pip install scikit-learn==1.7.2
pip install pandas
pip install numpy
```

Or use requirements.txt (if provided):

```bash
pip install -r requirements.txt
```

### Step 4: Verify Installation

```bash
# Test the utility functions
cd server
python util.py
```

You should see the list of locations and some test predictions.

## 💻 Usage

### Starting the Server

1. **Navigate to the server directory:**
   ```bash
   cd BHP/server
   ```

2. **Run the Flask server:**
   ```bash
   python server.py
   ```

3. **Server will start at:**
   ```
   http://127.0.0.1:5000
   ```

### Using the Web Interface

1. **Open the client application:**
   - Navigate to `BHP/client/`
   - Open `app.html` in your web browser

2. **Enter property details:**
   - **Area**: Enter square footage (e.g., 1000)
   - **BHK**: Select number of bedrooms (1-5)
   - **Bathrooms**: Select number of bathrooms (1-5)
   - **Location**: Choose from dropdown (270+ locations)

3. **Click "Estimate Price"** to get the prediction

4. **View Results:**
   - Estimated price displayed in Lakhs (₹)

## 🔌 API Endpoints

### 1. Get All Locations

**Endpoint:** `GET /get_location_names`

**Response:**
```json
{
  "locations": [
    "1st block jayanagar",
    "1st phase jp nagar",
    "whitefield",
    ...
  ]
}
```

### 2. Predict Home Price

**Endpoint:** `POST /predict_home_price`

**Request Body (form-data):**
```
total_sqft: 1000
location: "1st Phase JP Nagar"
bhk: 2
bath: 2
```

**Response:**
```json
{
  "estimated_price": 83.5
}
```

### 3. Home Page

**Endpoint:** `GET /`

**Response:** HTML page with API documentation

## 📊 Model Information

### Training Data
- **Dataset**: Bangalore home prices dataset
- **Features**: 
  - Total square feet
  - Number of bathrooms
  - Number of bedrooms (BHK)
  - Location (270+ areas in Bangalore)

### Model Details
- **Algorithm**: Linear Regression
- **Features**: One-hot encoded locations + numerical features
- **Training**: scikit-learn 1.7.2
- **Serialization**: Pickle format

### Performance
- Model performance metrics available in the `model/` directory
- Trained on historical Bangalore real estate data

## 🧪 Testing the API

### Using cURL

```bash
# Get locations
curl http://127.0.0.1:5000/get_location_names

# Predict price
curl -X POST http://127.0.0.1:5000/predict_home_price \
  -d "total_sqft=1000" \
  -d "location=1st Phase JP Nagar" \
  -d "bhk=2" \
  -d "bath=2"
```

### Using Postman

1. **Method**: POST
2. **URL**: `http://127.0.0.1:5000/predict_home_price`
3. **Body**: Select `x-www-form-urlencoded`
4. **Add parameters**:
   - `total_sqft`: 1000
   - `location`: 1st Phase JP Nagar
   - `bhk`: 2
   - `bath`: 2

## 🎨 UI Features

- **Modern Gradient Design**: Purple/blue gradient header
- **Responsive Layout**: Works on desktop, tablet, and mobile
- **Smooth Animations**: Slide-in effects for results
- **Interactive Elements**: Hover effects on buttons and radio inputs
- **Form Validation**: Client-side validation with error messages
- **Clean Typography**: Professional font choices
- **Accessibility**: Semantic HTML and proper labels

## 🐛 Troubleshooting

### Common Issues

1. **"Module not found" error**
   ```bash
   pip install <module-name>
   ```

2. **CORS errors in browser**
   - Ensure Flask server is running
   - Check that CORS headers are enabled in `server.py`

3. **scikit-learn version warning**
   ```bash
   pip install scikit-learn==1.7.2
   ```

4. **Port already in use**
   ```bash
   # Change port in server.py
   app.run(debug=True, port=5001)
   ```

5. **Location not found**
   - Ensure location name matches exactly (case-insensitive)
   - Check available locations via `/get_location_names`

## 📝 Environment Variables

Create a `.env` file (optional):

```env
FLASK_ENV=development
FLASK_DEBUG=True
HOST=127.0.0.1
PORT=5000
```

## 🔄 Future Enhancements

- [ ] Add more ML models (Random Forest, XGBoost)
- [ ] Include property age as a feature
- [ ] Add price trend visualization
- [ ] User authentication and saved searches
- [ ] Mobile app (React Native/Flutter)
- [ ] Real-time market data integration
- [ ] Price comparison with nearby properties
- [ ] Interactive map view

## 👥 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@lokeshpuma](https://github.com/lokeshpuma)
- LinkedIn: [LokeshPuma](https://linkedin.com/in/lokeshpuma)
- Email: lokeshpuma29@gmail.com

## 🙏 Acknowledgments

- Dataset: Bangalore home prices data
- Inspiration: Real estate price prediction projects
- Libraries: scikit-learn, Flask, jQuery
- Community: Stack Overflow, GitHub

## 📞 Support

For support, email lokeshpuma29@gmail.com or open an issue in the GitHub repository.

---

**Made with ❤️ for Bangalore home buyers**

*Last Updated: January 30, 2026*
# Bengaluru_house_prices
