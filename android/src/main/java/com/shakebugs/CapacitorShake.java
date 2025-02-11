package com.shakebugs;

import android.app.Activity;

import com.shakebugs.shake.Shake;

public class CapacitorShake {
    public void start(Activity activity, String apiKey) {
        Shake.setCrashReportingEnabled(true);
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                Shake.start(activity, apiKey);
            }
        });
        return;
    }

    public void show() {
        Shake.show();
        return;
    }

    public void registerUser(String apiKey) {
        Shake.registerUser(apiKey);
        return;
    }
}
