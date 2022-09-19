package no.ukeplan.oransj;

import org.json.JSONObject;

import java.io.IOException;
import java.time.LocalDate;

public class TimeTableRetriever {
    public JSONObject getTimeTableForSubject(String subjectID) throws IOException {
        LocalDate date = LocalDate.now();
        String url = "https://www.ntnu.no/web/studier/emner?p_p_id=coursedetailsportlet_WAR_courselistportlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=schedules&p_p_cacheability=cacheLevelPage&_coursedetailsportlet_WAR_courselistportlet_courseCode=" + subjectID + "&year=" + date.getYear() + "&version=1";
        JsonImporter jsonImporter = new JsonImporter();
        return jsonImporter.readJsonFromUrl(url);
    }

    public static void main(String[] args) throws IOException {
        TimeTableRetriever timeTableRetriever = new TimeTableRetriever();
        System.out.println(timeTableRetriever.getTimeTableForSubject("IDATA2302"));
    }
}
