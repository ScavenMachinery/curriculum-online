body {
  display: flex;
  margin: 0;
  font-family: Arial, sans-serif;
}

.sidebar {
  width: 250px;
  background-color: #f4f4f4;
  padding: 20px;
}

.sidebar img.profile-img {
  width: 100%;
  border-radius: 50%;
  margin-bottom: 10px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
}

.sidebar ul li button {
  width: 100%;
  margin: 5px 0;
  padding: 8px;
  cursor: pointer;
}

.main-content {
  flex: 1;
  padding: 20px;
}

.section {
  display: none; /* Nasconde tutte le sezioni di default */
}

.section h1, .section h2 {
  color: #2c3e50;
}

.skills-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.education-grid {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}

.thesis-images img {
  width: 150px;
  margin: 5px;
}

