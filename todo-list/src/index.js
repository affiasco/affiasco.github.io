import "./style.css";
import { allTasks } from "./allTasks.js";
import { todayTasks } from "./todayTasks";
import { weeklyTasks } from "./weeklyTasks";

window.onload = () => allTasks().showPageOnLoad();

allTasks().renderPage();
todayTasks().renderPage();
weeklyTasks().renderPage();
