import "./App.css";
import Header from "./Header/Header";
import Map from "./Map/Map";
import List from "./List/List";
import PlaceDetails from "./PlaceDetails/PlaceDetails";
import { CssBaseline, Grid } from "@mui/material";
function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={2} style={{ width: "100%" }}>
        <Grid item sx={12} md={4}>
          <List />
        </Grid>
        <Grid item sx={12} md={8}>
          <Map />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
