import List from "../../../../src/tree/values/nodes/List";
import ListItem from "../../../../src/tree/values/nodes/ListItem";

describe( "List", () => {
	beforeEach( () => {
		console.warn = jest.fn();
	} );

	it( "can make a List node", () => {
		const startIndex = 0;
		const endIndex = 30;
		const childrenForListItems = [ "a", 1, true ];
		const ordered = true;
		const listItem1 = new ListItem( 4, 10, childrenForListItems );
		const listItem2 = new ListItem( 11, 17, childrenForListItems );
		const children = [ listItem1, listItem2 ];

		const listNode = new List( startIndex, endIndex, ordered, children );

		expect( listNode.type ).toEqual( "list" );
		expect( listNode.startIndex ).toEqual( startIndex );
		expect( listNode.endIndex ).toEqual( endIndex );
		expect( listNode.ordered ).toEqual( ordered );
		expect( listNode.children ).toEqual( children );
		expect( console.warn ).not.toBeCalled();
	} );

	it( "warns about creating a List from elements which are not ListItems", () => {
		const startIndex = 0;
		const endIndex = 30;
		const ordered = false;
		const childrenForListItems = [ "a", 1, true ];
		const listItem1 = new ListItem( 4, 10, childrenForListItems );
		const listItem2 = new ListItem( 11, 17, childrenForListItems );
		const children = [ listItem1, listItem2, childrenForListItems ];

		const listNode = new List( startIndex, endIndex, ordered, children );

		expect( listNode.type ).toEqual( "list" );
		expect( listNode.startIndex ).toEqual( startIndex );
		expect( listNode.endIndex ).toEqual( endIndex );
		expect( listNode.ordered ).toEqual( ordered );
		expect( listNode.children ).toEqual( children );
		expect( console.warn ).toBeCalled();
	} );
} );
