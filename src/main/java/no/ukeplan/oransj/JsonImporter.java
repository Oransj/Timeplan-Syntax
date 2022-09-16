package no.ukeplan.oransj;

import org.json.JSONException;
import org.json.JSONObject;

import java.io.*;
import java.net.URL;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;

public class JsonImporter {

    public static void main(String[] args) throws IOException, JSONException {
        //JSONObject json = readJsonFromUrl("https://www.ntnu.no/web/studier/emner?p_p_id=coursedetailsportlet_WAR_courselistportlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_resource_id=schedules&p_p_cacheability=cacheLevelPage&_coursedetailsportlet_WAR_courselistportlet_courseCode=IDATA2302&year=2022&version=1");
        //System.out.println(json);

    }

    private static String readAll(Reader reader) throws IOException {
        StringBuilder jsonString = new StringBuilder();
        int i;
        while ((i = reader.read()) != -1) {
            jsonString.append((char) i);
        }
        return jsonString.toString();
    }

    public JSONObject readJsonFromUrl(String url) throws IOException, JSONException {
        try (InputStream urlStream = new URL(url).openStream()) {
            BufferedReader jsonReader = new BufferedReader(new InputStreamReader(urlStream, StandardCharsets.UTF_8));
            String jsonText = readAll(jsonReader);
            return new JSONObject(jsonText);
        }
    }
}
