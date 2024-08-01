import Calendar from "react-calendar";
import "./Calendar.css";
import "react-calendar/dist/Calendar.css";
import { useNavigate } from "react-router-dom";

const SpoonCalendar = ({ value }) => {
  const navigate = useNavigate();

  const onChange = (e) => {
    e.setDate(e.getDate());

    const year = e.getFullYear();
    const month = e.getMonth() + 1;
    const date = e.getDate();

    navigate(`/analysis/${year}-${month}-${date}`);
  };

  return (
    <>
      <Calendar
        className="calendar"
        onChange={onChange}
        value={value}
        formatDay={(locale, date) =>
          date.toLocaleString("en", { day: "numeric" })
        }
      />
    </>
  );
};

export default SpoonCalendar;
