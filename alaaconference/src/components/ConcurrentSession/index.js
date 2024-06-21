// Component for displaying a concurrent session
// Will display a title, author(s) and a padlet button
import React from "react";
import { LearnButton } from "@site/src/components/EOIButton";
import styles from './ConcurrentSession.modules.css';
import {sessionData, sessionStreams, emptyKey} from './sessionData';
import useBaseUrl from '@docusaurus/useBaseUrl';

export const abstractURLBase = '/docs/zabstracts';

export function ConcurrentSession({sessionID, title, presenters, abstractURL, learnURL, noAbstract}) {
    // Both title and presenters are strings
    const theURL=useBaseUrl(abstractURL)
    let displayLearnButton = '';
    if ( learnURL != '' ) {
        displayLearnButton = <LearnButton learnURL={learnURL} />
    }
    let displayTitle =  <a href={theURL}>
                            {title}
                        </a>
    if ( noAbstract ) {
        displayTitle = title;
    }
    return (
        <div>
            <div className={styles.csContainer}>
                <div className={styles.csSession}>
                    {sessionID}
                </div>
                <div className={styles.csLearnButton}>
                    {displayLearnButton}
                </div>
            </div>
            <div className={styles.csEntryTitle}>
                {displayTitle}
            </div>
            <div className={styles.csEntryPresenters}>
                {presenters}
            </div>
        </div>
    )

}

// Prints the table row for a list of sessions.  
// Assume we have three sessions per row.
// The first row contains:
// - session identifier
// - session title
// - link to abstract
// - session presenter(s)
// The second row contains a link to the padlet for this session
export function CSRow({sessionKeys}) {
    // We need to construct the Abstract's URL so we dump all the data
    // into a local variable so we can process
    let theSessions = {};
    sessionKeys.forEach(sKey => {
        theSessions[sKey] = {};
        theSessions[sKey].title = sessionData[sKey].title;
        theSessions[sKey].presenters = sessionData[sKey].presenters;
        theSessions[sKey].learnURL = sessionData[sKey].learnURL;
        theSessions[sKey].noAbstract = sessionData[sKey].noAbstract;

        // Store the key in its proper format
        theSessions[sKey].key = sKey.substring(2).replace('_', '.')
        // Get the concurrent session number from the key
        const csNumber = theSessions[sKey].key.split('.')[0];
        const absNumber = theSessions[sKey].key.split('.')[1];

        // Constsruct the AbstractURL
        const abstractURL = `${abstractURLBase}/${csNumber}/${absNumber}`
        theSessions[sKey].abstractURL = useBaseUrl(abstractURL);
    })
    return (
        <>
            <tr>
                {sessionKeys.map((sKey, index) => (
                    <td>
                        <ConcurrentSession
                            sessionID={theSessions[sKey].key}
                            title={theSessions[sKey].title}
                            presenters={theSessions[sKey].presenters}
                            abstractURL={theSessions[sKey].abstractURL}
                            learnURL={theSessions[sKey].learnURL}
                            noAbstract = {theSessions[sKey].noAbstract} />
                    </td>
                ))}
            </tr>
        </>
    )
}

export function DisplaySessionsWithIDs({csKey, sessionIDList}) {
    // csKey should be an integer that reflects the number of the Concurrent Session
    // sessionIDList should be eg ['1', '2', '3', '4'] 
    // Assume the streams are always ['A', 'B', 'C']
    // Have a sanity check in case we can't find the key

    const sessionRows = sessionIDList.map(sID => {
        let sessionRow = [];        // Contains the list of sessions to be passed to CSRow()
        sessionStreams.forEach(key => {
            let streamKey = `id${csKey}_${key}${sID}`;
            if ( sessionData[streamKey] ) {
                sessionRow.push(streamKey);
            } else {
                sessionRow.push(emptyKey);
            }
        });
        return <CSRow sessionKeys={sessionRow} key={sID} />
    });
    
    return (
        <>
            {sessionRows}
        </>
    )
}