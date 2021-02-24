import MessageIcon from '@material-ui/icons/Message';
import AppsIcon from '@material-ui/icons/Apps';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleIcon from '@material-ui/icons/People';

export const sidebarItems = [
    {
        icon: <MessageIcon />,
        text: "Thread"
    },
    {
        icon: <InboxIcon />,
        text: "All Dms"
    },
    {
        icon: <DraftsIcon />,
        text: "Mentions & Reactions"
    },
    {
        icon: <BookmarkBorderIcon />,
        text: "Saved Items"
    },
    {
        icon: <PeopleIcon />,
        text: "People & Groups"
    },
    {
        icon: <AppsIcon />,
        text: "More"
    }
]

export const sidebarChannel = [
    {
        ChannelName: "#GeneralThread"
    },
    {
        ChannelName: "#Python-assistance"
    },
    {
        ChannelName: "#TradingTopics"
    },
    {
        ChannelName: "#Q&A"
    }

]